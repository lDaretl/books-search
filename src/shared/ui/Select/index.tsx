import {TSelectProps} from "../../../app/types";
import {useState} from "react";

const Select = ({label, id, options, value, onChange}: TSelectProps) => {
    const [open, setOpen] = useState<boolean>(false)

    return (
        <div
            className="form-floating w-100 shadow"
            style={{
                minWidth: '120px',
                maxWidth: '150px',
            }}
        >
            <select
                className="form-select"
                id={id}
                aria-label="Categories select"
                value={value}
                onClick={() => setOpen(!open)}
                onChange={(e) => onChange(e.target.value)}
            >
                {
                    options.map( option =>
                        <option className={open ? 'animate__animated animate__bounceInDown' : 'animate__animated animate__bounceInUp'} key={option} value={option}>{option}</option>
                    )
                }
            </select>
            <label htmlFor={id}>{label}</label>
        </div>
    );
};

export default Select;