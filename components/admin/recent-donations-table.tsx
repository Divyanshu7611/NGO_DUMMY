"use client";

import React from "react";
import { format } from "date-fns";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle,
  CardDescription 
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Download } from "lucide-react";

// Simulated recent donations data
const recentDonations = [
  {
    id: "DON-1001",
    name: "John Smith",
    email: "john.smith@example.com",
    amount: 250.00,
    date: new Date("2025-06-01T14:30:00"),
    method: "Credit Card",
    status: "Completed",
    cause: "Clean Water Initiative"
  },
  {
    id: "DON-1002",
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    amount: 100.00,
    date: new Date("2025-06-01T10:15:00"),
    method: "PayPal",
    status: "Completed",
    cause: "Education for All"
  },
  {
    id: "DON-1003",
    name: "Michael Chen",
    email: "michael.c@example.com",
    amount: 500.00,
    date: new Date("2025-05-31T18:45:00"),
    method: "Bank Transfer",
    status: "Pending",
    cause: "Environmental Protection"
  },
  {
    id: "DON-1004",
    name: "Emily Rodriguez",
    email: "emily.r@example.com",
    amount: 75.00,
    date: new Date("2025-05-31T09:20:00"),
    method: "Credit Card",
    status: "Completed",
    cause: "Clean Water Initiative"
  },
  {
    id: "DON-1005",
    name: "David Kim",
    email: "david.k@example.com",
    amount: 150.00,
    date: new Date("2025-05-30T16:10:00"),
    method: "PayPal",
    status: "Completed",
    cause: "Education for All"
  }
];

export default function RecentDonationsTable() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Recent Donations</CardTitle>
          <CardDescription>Latest donations received through the platform.</CardDescription>
        </div>
        <Button size="sm" variant="outline">
          View All
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Method</TableHead>
              <TableHead>Cause</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentDonations.map((donation) => (
              <TableRow key={donation.id}>
                <TableCell>{donation.id}</TableCell>
                <TableCell>
                  <div>
                    <div className="font-medium">{donation.name}</div>
                    <div className="text-sm text-muted-foreground">{donation.email}</div>
                  </div>
                </TableCell>
                <TableCell className="font-medium">${donation.amount.toFixed(2)}</TableCell>
                <TableCell>{format(donation.date, "MMM d, yyyy")}</TableCell>
                <TableCell>{donation.method}</TableCell>
                <TableCell>{donation.cause}</TableCell>
                <TableCell>
                  <Badge 
                    variant={donation.status === "Completed" ? "default" : "secondary"}
                  >
                    {donation.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end space-x-2">
                    <Button variant="ghost" size="icon">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}