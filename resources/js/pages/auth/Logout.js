import React from "react";

function Logout() {
    const handleLogout = async (event) => {
        event.preventDefault();

        const response = await fetch("/logout", {
            method: "POST",

            headers: {
                Accept: "application/json",
                "Content-type": "application/json",
                "X-CSRF-TOKEN": document
                    .querySelector('meta[name="csrf-token"]')
                    .getAttribute("content"),
            },
        });
        // const response_data = await response.json();

        if (response.status == 204) {
            location.href = "/";
        } else {
            // setErrors(response_data.errors);
            console.log("error");
        }
    };

    return (
        <>
            <span onClick={handleLogout}>Logout</span>
        </>
    );
}

export default Logout;
