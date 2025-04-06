document.addEventListener('DOMContentLoaded', function() {
    // Sample data for recent orders
    const recentOrders = [
        { id: '#ORD-001', customer: 'John Chege', date: '2023-05-15', amount: 'Ksh 250', status: 'completed' },
        { id: '#ORD-002', customer: 'Jane Wanjiru', date: '2023-05-15', amount: 'Ksh 200', status: 'completed' },
        { id: '#ORD-003', customer: 'Robert Nyachae', date: '2023-05-14', amount: 'Ksh 150', status: 'in-progress' },
        { id: '#ORD-004', customer: 'Essie Atieno', date: '2023-05-14', amount: 'Ksh 200', status: 'pending' },
        { id: '#ORD-005', customer: 'Michael Salim', date: '2023-05-13', amount: 'Ksh 300', status: 'completed' },
        { id: '#ORD-006', customer: 'Sarah Mueni', date: '2023-05-13', amount: 'Ksh 200', status: 'completed' },
        { id: '#ORD-007', customer: 'David Wafula', date: '2023-05-12', amount: 'Ksh 250', status: 'in-progress' }
    ];

    // Populate recent orders table
    const tableBody = document.getElementById('ordersTableBody');
    recentOrders.forEach(order => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${order.id}</td>
            <td>${order.customer}</td>
            <td>${order.date}</td>
            <td>${order.amount}</td>
            <td><span class="status ${order.status}">${order.status.replace('-', ' ')}</span></td>
            <td><button class="action-btn">View</button></td>
        `;
        
        tableBody.appendChild(row);
    });

    // Income chart
    const ctx = document.getElementById('incomeChart').getContext('2d');
    const incomeChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    label: 'Income',
                    data: [12500, 19000, 15000, 18000, 22000, 19500, 23000, 25000, 21000, 24000, 26000, 30000],
                    borderColor: '#3498db',
                    backgroundColor: 'rgba(52, 152, 219, 0.1)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.4
                },
                {
                    label: 'Expenses',
                    data: [8000, 9500, 10000, 11000, 12000, 11500, 13000, 14000, 12500, 13500, 14500, 16000],
                    borderColor: '#e74c3c',
                    backgroundColor: 'rgba(231, 76, 60, 0.1)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Monthly Income vs Expenses',
                    font: {
                        size: 16
                    }
                },
                legend: {
                    position: 'top',
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return 'Ksh' + value.toLocaleString();
                        }
                    }
                }
            }
        }
    });

    // Update stats cards with random data (for demo purposes)
    function updateStats() {
        const statValues = document.querySelectorAll('.stat-value');
        
        // Today's Orders
        statValues[0].textContent = Math.floor(Math.random() * 10) + 20;
        
        // Completed Orders
        statValues[1].textContent = Math.floor(Math.random() * 5) + 15;
        
        // In Progress Orders
        statValues[2].textContent = Math.floor(Math.random() * 3) + 2;
        
        // Pending Orders
        statValues[3].textContent = Math.floor(Math.random() * 3) + 1;
        
        // New Customers
        statValues[4].textContent = Math.floor(Math.random() * 4) + 3;
        
        // Expenses
        statValues[5].textContent = '$' + (Math.floor(Math.random() * 500) + 1000).toLocaleString();
    }

    // Update stats every 5 seconds for demo purposes
    setInterval(updateStats, 5000);
});