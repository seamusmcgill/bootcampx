SELECT DISTINCT teachers.name AS teacher, cohorts.name AS cohort
FROM teachers 
JOIN assistance_requests ON teachers.id = assistance_requests.teacher_id
JOIN students on students.id = assistance_requests.student_id
JOIN cohorts on students.cohort_id = cohorts.id
WHERE cohorts.name = 'JUL02'
ORDER BY teacher;