import React from "react";

export default function Input({ type, value, onChange, placeholder, error, icon: Icon }) {
  return (
    <div className="input-field">
      <input 
        type={type} 
        value={value} 
        onChange={onChange} 
        placeholder={placeholder} 
      />
      {Icon && <Icon className="icon" />}
      {error && <span className="error">{error}</span>}
    </div>
  );
}
