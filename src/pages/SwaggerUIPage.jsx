import React from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import {Urls} from "../service/api/Urls.js";

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
            url={`${Urls.BASE}/v3/api-docs`}
            docExpansion="none"
            filter="true"
            operations-sorter="method"
            tag-sorter="alpha"
            />
        </div>
    )
}

export default SwaggerUIPage;