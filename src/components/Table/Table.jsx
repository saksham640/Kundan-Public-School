import styles from "../Table/Table.module.css";
import DownloadBtn from "../DownloadBtn/DownloadBtn";

export default function Table({ headings, values }) {
    return (
        <div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        {headings.map((heading, index) => (
                            <th key={index}>{heading}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {values.data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
