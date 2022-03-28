import React from "react";
import style from "./FormControls.module.css";

export const Textarea=({input,meta, ...props})=>{
    const met=meta.touched && meta.error;
    return(<div>
            <div className={met && style.formControl + " " + style.error}>
                <input {...input}{...props}/>
            </div>
            {met && <span>{meta.error}</span>}
    </div>
    )
}