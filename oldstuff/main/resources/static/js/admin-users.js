document.addEventListener("DOMContentLoaded", () => {
    const userTableBody = document.querySelector("#userTable tbody");
    const searchInput = document.getElementById("searchInput");
  
    let users = [];
    let currentPage = 1;
    const rowsPerPage = 10;
  
    async function loadUsers(query = "") {
      const url = query ? `/users/search?query=${encodeURIComponent(query)}` : "/users";
      const res = await fetch(url);
      users = await res.json();
      renderTable(users, currentPage);
      renderPagination(users.length);
    }
  
    function renderTable(data, page) {
      userTableBody.innerHTML = "";
      const start = (page - 1) * rowsPerPage;
      const end = start + rowsPerPage;
      const paginatedUsers = data.slice(start, end);
  
      for (const user of paginatedUsers) {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${user.id}</td>
          <td>${user.firstName}</td>
          <td>${user.lastName}</td>
          <td>${user.email}</td>
          <td>${user.telephone}</td>
          <td>${user.role}</td>
          <td>
            <button onclick="editUser(${user.id})">Edit</button>
            <button onclick="deleteUser(${user.id})">Delete</button>
          </td>
        `;
        userTableBody.appendChild(row);
      }
    }
  
    function renderPagination(totalItems) {
        const pagination = document.getElementById("paginationControls");
        pagination.innerHTML = "";
        const pageCount = Math.ceil(totalItems / rowsPerPage);
    
        // Prev button
        const prevBtn = document.createElement("button");
        prevBtn.innerHTML = "&laquo;"; // «
        prevBtn.disabled = currentPage === 1;
        prevBtn.onclick = () => {
            if (currentPage > 1) {
                currentPage--;
                renderTable(users, currentPage);
                renderPagination(users.length);
            }
        };
        pagination.appendChild(prevBtn);
    
        // Page numbers
        for (let i = 1; i <= pageCount; i++) {
            const btn = document.createElement("button");
            btn.textContent = i;
            if (i === currentPage) btn.classList.add("active-page");
            btn.onclick = () => {
                currentPage = i;
                renderTable(users, currentPage);
                renderPagination(users.length);
            };
            pagination.appendChild(btn);
        }
    
        // Next button
        const nextBtn = document.createElement("button");
        nextBtn.innerHTML = "&raquo;"; // »
        nextBtn.disabled = currentPage === pageCount;
        nextBtn.onclick = () => {
            if (currentPage < pageCount) {
                currentPage++;
                renderTable(users, currentPage);
                renderPagination(users.length);
            }
        };
        pagination.appendChild(nextBtn);
    }
  
    window.deleteUser = async function (id) {
      if (confirm("Are you sure you want to delete this user?")) {
        await fetch(`/users/${id}`, { method: "DELETE" });
        loadUsers();
      }
    };
  
    searchInput.addEventListener("input", () => {
      currentPage = 1;
      loadUsers(searchInput.value);
    });



    const modal = document.getElementById("editModal");
    const closeModalBtn = document.getElementById("closeModal");
    const editForm = document.getElementById("editUserForm");

    window.editUser = function (id) {
      const user = users.find(u => u.id === id);
      if (!user) return;

      document.getElementById("editUserId").value = user.id;
      document.getElementById("editFirstName").value = user.firstName || "";
      document.getElementById("editLastName").value = user.lastName || "";
      document.getElementById("editEmail").value = user.email || "";
      document.getElementById("editTelephone").value = user.telephone || "";
      document.getElementById("editRole").value = user.role || "";

      modal.style.display = "block";
    };

    closeModalBtn.onclick = () => modal.style.display = "none";
    window.onclick = e => { if (e.target == modal) modal.style.display = "none"; };

    editForm.onsubmit = async (e) => {
        e.preventDefault(); 
        const id = document.getElementById("editUserId").value;
        const updatedUser = {
          firstName: document.getElementById("editFirstName").value,
          lastName: document.getElementById("editLastName").value,
          email: document.getElementById("editEmail").value,
          telephone: document.getElementById("editTelephone").value,
          role: document.getElementById("editRole").value
        };  
        if (document.getElementById("editPassword").value !== "") {
          updatedUser.password = document.getElementById("editPassword").value;
        }

        try {
          const res = await fetch(`/users/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedUser)
          });
          if (!res.ok) throw new Error("Update failed");
          modal.style.display = "none";
          loadUsers(); // Refresh table
        } catch (err) {
          alert("Update failed");
          console.error(err);
        }
    };
  
    loadUsers();

});
  