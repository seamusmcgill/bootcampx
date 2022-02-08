SELECT AVG(cohort_assistance_duration.total_duration) AS average_total_duration
FROM (
  SELECT SUM(completed_at - started_at) AS total_duration
  FROM assistance_requests
  JOIN students ON student_id = students.id
  JOIN cohorts ON students.cohort_id = cohorts.id
  GROUP BY cohorts.id
  ORDER BY total_duration
) cohort_assistance_duration;