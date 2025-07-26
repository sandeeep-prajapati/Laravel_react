import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { Link } from '@inertiajs/react';
import '../../../css/style.css'

const UserTable = ({ users }) => {
    const [currentPage, setCurrentPage] = useState(users.current_page);

    // Handle page change
    const handlePageChange = (page) => {
        // Make an Inertia request to the server with the selected page number
        Inertia.get('/users', { page });
        setCurrentPage(page);
    };

    return (
        <div>
            <h1>User List</h1>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.data.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                {/* Add any actions here, like Edit or Delete */}
                                <Link href={`/users/edit/${user.id}`}>Edit</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Pagination */}
            <div className="pagination">
                {users.links.map((link) => {
                    // Only show 'Next' or 'Previous' links if they are present
                    if (link.label === "&laquo; Previous") {
                        return (
                            <button
                                key={link.label}
                                disabled={!link.url}
                                onClick={() => handlePageChange(link.label === "&laquo; Previous" && currentPage > 1 ? currentPage - 1 : currentPage)}>
                                Previous
                            </button>
                        );
                    } else if (link.label === "Next &raquo;") {
                        return (
                            <button
                                key={link.label}
                                disabled={!link.url}
                                onClick={() => handlePageChange(currentPage + 1)}>
                                Next
                            </button>
                        );
                    } else {
                        return (
                            <button
                                key={link.label}
                                onClick={() => handlePageChange(Number(link.label))}>
                                {link.label}
                            </button>
                        );
                    }
                })}
            </div>
        </div>
    );
};

export default UserTable;