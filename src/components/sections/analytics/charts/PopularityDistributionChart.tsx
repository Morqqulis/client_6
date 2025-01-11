'use client'

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

export function PopularityDistributionChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="popularity" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="count" fill="#ffc658" />
      </BarChart>
    </ResponsiveContainer>
  )
}

