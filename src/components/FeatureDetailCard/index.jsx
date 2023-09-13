import React from 'react'

import StatusBox from "../StatusBox";
import styles from "./styles.css";
import TimeAgo from 'react-timeago'
import enStrings from 'react-timeago/lib/language-strings/en'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'

const formatter = buildFormatter(enStrings)

function FeatureDetailCard({ feature }) {
  return (
    <article className={styles.featureCard}>
      <div className={styles.timeInfo}>
        <strong>{feature.type} &nbsp;<a rel="noreferrer" target="_blank" href={"https://osm.org/" + feature.type + "/" + feature.id}>{feature.id}</a></strong>
        <abbr title={feature.timestamp}>
          <TimeAgo date={feature.timestamp} formatter={formatter} />
        </abbr>
      </div>
      <div>
      <table>
        <tbody>
        {feature.tags && Object.keys(feature.tags).map((key) => (
          <tr className={styles.tags} key={[key,feature.tags[key]].join('=')}>
            <td className={styles.key}>{key}</td>
            <td className={styles.value}>
            <abbr title={feature.tags[key]}>
              {feature.tags[key]}
            </abbr>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
      </div>
      {/* Including this additional div to preserve the inline-block style of the StatusBox. */}
      <div>{feature.status && <StatusBox status={feature.status} />}</div>
      {/* <div>
        {feature.comments.map((comment, index) => (
          <span key={comment} className={styles.text-secondary}>
            {comment}
            {index !== feature.comments.length - 1 && " "}
          </span>
        ))}
      </div> */}
    </article>
  );
}

export default FeatureDetailCard;
