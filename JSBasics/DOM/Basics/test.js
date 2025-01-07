import React, { Component } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

class UsersTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          name: "Sarah Chen",
          age: 34,
          salary: 85000,
          role: "Senior Developer",
        },
        { name: "James Wilson", age: 28, salary: 62000, role: "UX Designer" },
        {
          name: "Maria Garcia",
          age: 41,
          salary: 115000,
          role: "Project Manager",
        },
        { name: "David Kim", age: 25, salary: 52000, role: "Junior Developer" },
        {
          name: "Lisa Thompson",
          age: 37,
          salary: 92000,
          role: "Product Owner",
        },
        {
          name: "Michael Brown",
          age: 45,
          salary: 125000,
          role: "Technical Lead",
        },
        { name: "Emma Davis", age: 31, salary: 78000, role: "QA Engineer" },
        {
          name: "Robert Taylor",
          age: 29,
          salary: 67000,
          role: "Frontend Developer",
        },
        {
          name: "Priya Patel",
          age: 33,
          salary: 88000,
          role: "Backend Developer",
        },
        {
          name: "John Murphy",
          age: 39,
          salary: 98000,
          role: "DevOps Engineer",
        },
      ],
      sortField: null,
      sortDirection: "asc",
    };
  }

  formatSalary = (salary) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(salary);
  };

  handleSort = (field) => {
    const { sortField, sortDirection } = this.state;
    const newDirection =
      field === sortField ? (sortDirection === "asc" ? "desc" : "asc") : "asc";

    const sortedUsers = [...this.state.users].sort((a, b) => {
      if (newDirection === "asc") {
        return a[field] > b[field] ? 1 : -1;
      }
      return a[field] < b[field] ? 1 : -1;
    });

    this.setState({
      users: sortedUsers,
      sortField: field,
      sortDirection: newDirection,
    });
  };

  render() {
    const { users, sortField, sortDirection } = this.state;

    return (
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>Company Employees</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th
                    className="p-4 text-left cursor-pointer hover:bg-gray-200"
                    onClick={() => this.handleSort("name")}
                  >
                    Name{" "}
                    {sortField === "name" &&
                      (sortDirection === "asc" ? "↑" : "↓")}
                  </th>
                  <th
                    className="p-4 text-left cursor-pointer hover:bg-gray-200"
                    onClick={() => this.handleSort("age")}
                  >
                    Age{" "}
                    {sortField === "age" &&
                      (sortDirection === "asc" ? "↑" : "↓")}
                  </th>
                  <th
                    className="p-4 text-left cursor-pointer hover:bg-gray-200"
                    onClick={() => this.handleSort("salary")}
                  >
                    Salary{" "}
                    {sortField === "salary" &&
                      (sortDirection === "asc" ? "↑" : "↓")}
                  </th>
                  <th
                    className="p-4 text-left cursor-pointer hover:bg-gray-200"
                    onClick={() => this.handleSort("role")}
                  >
                    Role{" "}
                    {sortField === "role" &&
                      (sortDirection === "asc" ? "↑" : "↓")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-4">{user.name}</td>
                    <td className="p-4">{user.age}</td>
                    <td className="p-4">{this.formatSalary(user.salary)}</td>
                    <td className="p-4">{user.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    );
  }
}

export default UsersTable;
