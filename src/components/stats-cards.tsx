// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { FileText, CheckCircle, Clock, AlertTriangle, Send } from 'lucide-react';

// interface Stats {
//   total: number;
//   resolved: number;
//   pending: number;
//   overdue: number;
//   escalated?: number;
// }

// interface StatsCardsProps {
//   stats: Stats;
// }

// export function StatsCards({ stats }: StatsCardsProps) {
//   const statItems = [
//     { title: 'Total Complaints', value: stats.total, icon: FileText, color: 'text-primary' },
//     { title: 'Resolved', value: stats.resolved, icon: CheckCircle, color: 'text-success' },
//     { title: 'Pending', value: stats.pending, icon: Clock, color: 'text-warning' },
//     { title: 'Overdue', value: stats.overdue, icon: AlertTriangle, color: 'text-destructive' },
//   ];

//   if (stats.escalated !== undefined) {
//     statItems.push({ title: 'Escalated', value: stats.escalated, icon: Send, color: 'text-escalated' });
//   }

//   return (
//     <div className={`grid gap-4 md:grid-cols-2 ${stats.escalated !== undefined ? 'lg:grid-cols-5' : 'lg:grid-cols-4'}`}>
//       {statItems.map((item) => (
//         <Card key={item.title}>
//           <CardHeader className="flex flex-row items-center justify-between space-y-0 p-4 pb-2">
//             <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
//             <item.icon className={`h-4 w-4 ${item.color}`} />
//           </CardHeader>
//           <CardContent className="p-4 pt-0">
//             <div className="text-xl font-bold">{item.value}</div>
//             <p className="text-xs text-muted-foreground">
//               {/* You can add comparison logic here */}
//             </p>
//           </CardContent>
//         </Card>
//       ))}
//     </div>
//   );
// }

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, CheckCircle, Clock, AlertTriangle, Send } from 'lucide-react';
import * as React from 'react';

interface Stats {
  total: number;
  resolved: number;
  pending: number;
  overdue?: number;
  escalated?: number;
}

interface StatsCardsProps {
  stats: Stats;
}

export function StatsCards({ stats }: StatsCardsProps) {
  const statItems = [
    { title: 'Total Complaints', value: stats.total, icon: FileText, color: 'from-blue-400 to-blue-600', iconColor: 'text-blue-600' },
    { title: 'Resolved', value: stats.resolved, icon: CheckCircle, color: 'from-green-400 to-green-600', iconColor: 'text-green-600' },
    { title: 'Pending', value: stats.pending, icon: Clock, color: 'from-yellow-400 to-yellow-600', iconColor: 'text-yellow-600' },
    { title: 'Overdue', value: stats.overdue || 0, icon: AlertTriangle, color: 'from-red-400 to-red-600', iconColor: 'text-red-600' },
  ];

  if (stats.escalated !== undefined) {
    statItems.push({ title: 'Escalated', value: stats.escalated, icon: Send, color: 'from-purple-400 to-purple-600', iconColor: 'text-purple-600' });
  }

  return (
    <div className={`grid gap-4 md:grid-cols-2 ${statItems.length > 4 ? 'lg:grid-cols-5' : 'lg:grid-cols-4'}`}>
      {statItems.map((item) => (
        <Card
          key={item.title}
          className={`relative overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300`}
        >
          {/* Gradient Background */}
          <div className={`absolute inset-0 bg-gradient-to-tr ${item.color} opacity-20`} />

          <CardHeader className="relative flex items-center justify-between p-4 pb-2">
            <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
            <item.icon className={`h-6 w-6 ${item.iconColor}`} />
          </CardHeader>

          <CardContent className="relative p-4 pt-0">
            <div className="text-2xl md:text-3xl font-bold">{item.value}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {item.title === 'Resolved' ? 'Successfully completed complaints' : ''}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}