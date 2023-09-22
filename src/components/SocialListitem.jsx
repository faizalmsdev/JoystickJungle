    import React from 'react'

    function SocialListitem({data}) {
    return (
        <li>
            <a href={`${data.navigate}`} className={`${data.class}`}>
                <i className={`bi ${data.icon}`}></i>
            </a>
        </li>
    )
    }

    export default SocialListitem
