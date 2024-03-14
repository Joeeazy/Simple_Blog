import styles from "./content.module.css";

export default function Content() {
  return (
    <div className={styles.container}>
      <img
        className={styles.img}
        alt=""
        src="https://miro.medium.com/v2/resize:fit:359/1*Y3729VvDhXIWf9F9buNg3g.gif"
      ></img>
      <div>
        <h2>Issue Summary</h2>
        <ul>
          <li>
            Duration: March 14, 2024, 10:00 AM — March 15, 2024, 2:00 PM (UTC)
          </li>
          <li>
            Impact: The web application experienced intermittent downtime,
            resulting in slow response times and partial service disruption.
            Approximately 20% of users were affected during this period
          </li>
          <li>
            Root Cause: An overloaded cache layer caused increased latency and
            intermittent failures.
          </li>
        </ul>
      </div>
      <div>
        <h2>Timeline</h2>
        <ul>
          <li>
            March 14, 2024, 10:15 AM (UTC): The issue was detected through
            monitoring alerts showing a significant increase in response time.
          </li>
          <li>
            Actions taken: Initially suspected a database problem, focusing on
            recent schema changes during deployment.
          </li>
          <li>
            Misleading investigation: Attention was directed towards the
            database cluster.
          </li>
          <li>
            Escalation: The incident was escalated to the database
            administration team for assessment.
          </li>
          <li>
            Resolution: The infrastructure team adjusted the cache configuration
            and implemented a monitoring system.
          </li>
        </ul>
      </div>
      <div>
        <h2>Root Cause and Resolution</h2>
        <ul>
          <li>
            The root cause was an overloaded cache layer, evicting frequently
            accessed data due to increased system load.
          </li>
          <li>
            The issue was resolved by adjusting the cache configuration and
            implementing proactive monitoring.
          </li>
        </ul>
      </div>
      <div>
        <h2>Corrective and Preventative Measures</h2>
        <h3>Improvements</h3>
        <ul>
          <li>Optimize cache eviction policies.</li>
          <li>Evaluate and scale cache infrastructure.</li>
          <li>Enhance monitoring and alert mechanisms.</li>
          <li>Conduct regular load testing and capacity planning.</li>
          <li>Refine incident response procedures.</li>
        </ul>
        <h3>Tasks</h3>
        <ul>
          <li>
            Patch cache eviction policies to prioritize frequently accessed
            data.
          </li>
          <li>
            Assess scalability of cache infrastructure and explore distributed
            caching solutions.
          </li>
          <li>
            Deploy comprehensive monitoring covering cache utilization, response
            times, and database performance.
          </li>
          <li>Perform regular load testing to validate system performance.</li>
          <li>
            Review and update incident response procedures for swift resolution.
          </li>
        </ul>
      </div>
    </div>
  );
}
