import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { onBoardAsync, skillsAsync } from '../redux/Slice/InitalSlice';

const OnboardDeveloper = () => {
    const dispatch = useDispatch();
    const [skills, setSkills] = useState([]);
    const [professionalExperienceSkills, setProfessionalExperienceSkills] = useState<string[]>([]);
    const [userData, setUserData] = useState({
        email: '',
        selectedSkills: [],
        professionalExperience: [{
            companyName: '',
            techStack: '',
            skillsUsed: [],
            timePeriod: '',
        }],
        educationalExperience: [{
            degreeName: '',
            schoolName: '',
            timePeriod: '',
        }],
        password: '',
    });

    useEffect(() => {
        dispatch(skillsAsync()).then((el: any) => {
            console.log(el);
            setSkills(el.payload.skills);
        });
    }, [dispatch]);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setUserData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSkillChange = (e: any) => {
        const selectedSkillIds = Array.from(e.target.selectedOptions, (option: any) => option.value);
        setUserData((prevState: any) => ({
            ...prevState,
            selectedSkills: selectedSkillIds,
        }));
    };

    const handleAddProfessionalExperience = () => {
        setUserData((prevState) => ({
            ...prevState,
            professionalExperience: [
                ...prevState.professionalExperience,
                { companyName: '', techStack: '', skillsUsed: [], timePeriod: '' },
            ],
        }));
    };
    const handleProfessionalExperienceChange = (index: number, e: any) => {
        e.persist();
        const { name, value } = e.target;
        console.log('Index:', index);
        console.log('Name:', name.split(".")[1]);
        console.log('Current Value:', value);
        setUserData((prevState) => {
            const updatedProfessionalExperience = prevState.professionalExperience.map((exp, i) => {
                console.log()
                if (i === index) {
                    return { ...exp, [name.split(".")[1]]: value };
                }
                return exp;
            });
            console.log('Updated Professional Experience:', updatedProfessionalExperience);
            return {
                ...prevState,
                professionalExperience: updatedProfessionalExperience,
            };
        });
    };
    const handleAddEducationalExperience = () => {
        setUserData((prevState) => ({
            ...prevState,
            educationalExperience: [
                ...prevState.educationalExperience,
                { degreeName: '', schoolName: '', timePeriod: '' },
            ],
        }));
    };

    const handleEducationalExperienceChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserData((prevState) => ({
            ...prevState,
            educationalExperience: prevState.educationalExperience.map((edu, i) =>
                i === index ? { ...edu, [name.split(".")[1]]: value } : edu
            ),
        }));
    };


    const handleSubmit = async () => {
        try {
            console.log('Server Response:', userData);
            // Reset the form or perform any other necessary actions
            dispatch(onBoardAsync(userData)).then(() => {
                console.warn("On Board Success")
            }).catch((err: any) => {
                console.log(err);
            })

            setUserData({
                email: '',
                selectedSkills: [],
                professionalExperience: [{
                    companyName: '',
                    techStack: '',
                    skillsUsed: [],
                    timePeriod: '',
                }],
                educationalExperience: [{
                    degreeName: '',
                    schoolName: '',
                    timePeriod: '',
                }],
                password: '',
            });
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    };

    return (
        <div>
            <h2>Onboard Developer</h2>
            <form>
                <label>
                    Email:
                    <input type="email" name="email" value={userData.email} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" name="password" value={userData.password} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Select Skills:
                    <select
                        name="selectedSkills"
                        multiple
                        value={userData.selectedSkills}
                        onChange={handleSkillChange}
                    >
                        {skills.map((skill: any) => (
                            <option key={skill._id} value={skill._id}>
                                {skill.name}
                            </option>
                        ))}
                    </select>
                </label>
                <br />
                <h3>Professional Experience</h3>
                {userData.professionalExperience.map((exp, index) => (
                    <div key={index}>
                        <label>
                            Company:
                            <input
                                type="text"
                                name={`professionalExperience[${index}].companyName`}
                                value={exp.companyName}
                                onChange={(e) => handleProfessionalExperienceChange(index, e)}
                            />
                        </label>
                        <label>
                            Tech Stack:
                            <input
                                type="text"
                                name={`professionalExperience[${index}].techStack`}
                                value={exp.techStack}
                                onChange={(e) => handleProfessionalExperienceChange(index, e)}
                            />
                        </label>
                        <label>
                            Skills Used:
                            <select
                                name={`professionalExperience[${index}].skillsUsed`}
                                multiple
                                value={exp.techStack}
                                onChange={(e) => handleProfessionalExperienceChange(index, e)}
                            >
                                {skills.map((skill: any) => (
                                    <option key={skill._id} value={skill._id}>
                                        {skill.name}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>
                ))}
                <button type="button" onClick={handleAddProfessionalExperience}>
                    Add Professional Experience
                </button>
                <h3>Educational Experience</h3>
                {userData.educationalExperience.map((edu, index) => (
                    <div key={index}>
                        <label>
                            Degree Name:
                            <input
                                type="text"
                                name={`educationalExperience[${index}].degreeName`}
                                value={edu.degreeName}
                                onChange={(e) => handleEducationalExperienceChange(index, e)}
                            />
                        </label>
                        <label>
                            School Name:
                            <input
                                type="text"
                                name={`educationalExperience[${index}].schoolName`}
                                value={edu.schoolName}
                                onChange={(e) => handleEducationalExperienceChange(index, e)}
                            />
                        </label>
                    </div>
                ))}
                <button type="button" onClick={handleAddEducationalExperience}>
                    Add Educational Experience
                </button>
                <br />
                <button type="button" onClick={handleSubmit}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default OnboardDeveloper;
