const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query(`
  SELECT DISTINCT teachers.name AS teacher, cohorts.name AS cohort
  FROM teachers 
  JOIN assistance_requests ON teachers.id = assistance_requests.teacher_id
  JOIN students on students.id = assistance_requests.student_id
  JOIN cohorts on students.cohort_id = cohorts.id
  WHERE cohorts.name = '${process.argv[2] || 'JUL02'}'
  ORDER BY teacher;
`)
  .then(res => {
    res.rows.forEach(row => {
      console.log(`${row.cohort}: ${row.teacher}`);
    });
  })
  .catch(err => console.log('query error', err));