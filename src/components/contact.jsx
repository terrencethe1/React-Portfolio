import React, { useState } from "react";

// Contact component
const Contact = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State to manage form errors
  const [errors, setErrors] = useState({});

  // Handle input change and update form data state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
