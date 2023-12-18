import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allDevsAsync } from '../redux/Slice/InitalSlice';
import './styles.css'; // Import the CSS file

const AllDevelopers = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(allDevsAsync());
    }, []);

    const data = useSelector((state: any) => state.initial.allDev);

    return (
        <div className="all-developers-container">
            <h2>All Developers</h2>
            {data.user.map((developer: any) => (
                <div key={developer._id} className="developer-card">
                    <h3>{`${developer.firstName} ${developer.lastName}`}</h3>
                    <p>Email: {developer.email}</p>
                    <p>Phone Number: {developer.phoneNumber}</p>

                    <div className="experience-section">
                        <h4>Professional Experience:</h4>
                        {developer.professionalExperience.map((exp: any, index: number) => (
                            <div key={index} className="experience-item">
                                <p>Company: {exp.companyName}</p>
                                <p>Tech Stack: {exp.techStack}</p>
                                {/* Add other details from professionalExperience */}
                            </div>
                        ))}
                    </div>

                    <div className="experience-section">
                        <h4>Educational Experience:</h4>
                        {developer.educationalExperience.map((edu: any, index: number) => (
                            <div key={index} className="experience-item">
                                <p>Degree Name: {edu.degreeName}</p>
                                <p>School Name: {edu.schoolName}</p>
                                {/* Add other details from educationalExperience */}
                            </div>
                        ))}
                    </div>

                    {/* Add other details from the developer object */}
                </div>
            ))}
        </div>
    );
};

export default AllDevelopers;
