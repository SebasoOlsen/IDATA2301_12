import React from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

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