import React from "react";

export default function Certification({ children, ...props }) {


    return (
        <div {...props}>
            {children}
        </div>
    );
}