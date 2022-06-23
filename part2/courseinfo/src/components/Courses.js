import React from 'react'
import Course from './Course'

const Courses = ({courses}) => {
    return (
    <div>
        {courses.map(course =>
            <div>
                <Course course={course} />
            </div>
        )}
    </div>
    )
}

export default Courses