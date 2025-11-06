// Diagram.jsx
import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import styles from './Diagram.module.css'; // Assuming CSS Modules for better scoping

const data = [
  {
    year: "2025",
    income: 0.8,
    trees: 0.02,
    co2: 0.0,
  },
  {
    year: "2026",
    income: 6.535,
    trees: 0.16,
    co2: 3,
  },
  {
    year: "2027",
    income: 11.4,
    trees: 2.8,
    co2: 1.2,
  },
  {
    year: "2028",
    income: 18.44,
    trees: 3.8,
    co2: 7.2,
  },
];

const Diagram = () => {
  return (
    <div className={styles.diagramContainer}>
      {/* Title and Legend */}
      <div className={styles.legendWrapper}>
        <h2 className={styles.title}>KEY INDICATORS</h2>
        <div className={styles.legendItems}>
          <div className={styles.legendItem}>
            <div className={`${styles.legendSwatch} ${styles.incomeSwatch}`}></div>
            <span className={styles.legendText}>Annual income ($M)</span>
          </div>
          <div className={styles.legendItem}>
            <div className={`${styles.legendSwatch} ${styles.treesSwatch}`}></div>
            <span className={styles.legendText}>Number of trees (M)</span>
          </div>
          <div className={styles.legendItem}>
            <div className={`${styles.legendSwatch} ${styles.co2Swatch}`}></div>
            <span className={styles.legendText}>CO2 absorption (K tons)</span>
          </div>
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="90%" height={400} className={styles.chartContainer}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#fff" />
          <XAxis dataKey="year" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip contentStyle={{ backgroundColor: "#fff", border: "none", borderRadius: "5px" }} />
          <Bar dataKey="income" fill="#10B981" name="Annual income ($M)" />
          <Bar dataKey="trees" fill="#108081" name="Number of trees (M)" />
          <Bar dataKey="co2" fill="#109381" name="CO2 absorption (K tons)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Diagram;