import React from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

/**
 * SwaggerUIPage component for displaying Swagger API documentation.
 *
 * @component
 * @returns {JSX.Element} The rendered Swagger UI page.
 */

const SwaggerUIPage = () => {
    return(
        <div style={{width: '100%', height: '100%'}}>
            <SwaggerUI
            url="https://localhost:8443/v3/api-docs"
            docExpansion="none"
            filter="true"
            operations-sorter="method"
            tag-sorter="alpha"
            />
        </div>
    )
}

export default SwaggerUIPage;