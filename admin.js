// ...existing code...
document.addEventListener('DOMContentLoaded', function() {
    // Toggle sidebar
    const menuBtn = document.getElementById('menu-btn');
    const sidebar = document.querySelector('aside');
    
    menuBtn.addEventListener('click', function() {
        sidebar.style.display = 'block';
        sidebar.classList.toggle('active');
    });

    // Close sidebar when clicking outside
    document.addEventListener('click', function(e) {
        if (!sidebar.contains(e.target) && e.target !== menuBtn) {
            sidebar.classList.remove('active');
        }
    });

    // Initialize circular progress indicators
    const progressCircles = document.querySelectorAll('svg circle');
    
    // Set the stroke-dashoffset based on percentage
    function setProgress(circle, percent) {
        const circumference = 2 * Math.PI * 36;
        const offset = circumference - (percent / 100) * circumference;
        circle.style.strokeDashoffset = offset;
    }

    // Set progress for each metric
    const metrics = [
        { element: '.sales', percent: 81 },
        { element: '.orders', percent: 60 },
        { element: '.total_income', percent: 44 },
        { element: '.total_expenses', percent: 62 },
        { element: '.customer', percent: 20 }
    ];

    metrics.forEach(metric => {
        const circle = document.querySelector(`${metric.element} svg circle`);
        setProgress(circle, metric.percent);
    });

    // Sample data for recent orders (in a real app, this would come from an API)
    const sampleOrders = [
        { product: 'clothes-laundry_basket', id: '45', status: 'Pending' },
        { product: 'dry_cleaning', id: '46', status: 'Completed' },
        { product: 'ironing', id: '47', status: 'In Progress' },
        { product: 'special_care', id: '48', status: 'Pending' },
        { product: 'stain_removal', id: '49', status: 'Completed' }
    ];

    // Populate orders table
    function populateOrdersTable(orders) {
        const tbody = document.querySelector('.recent-orders tbody');
        tbody.innerHTML = '';
        
        orders.forEach(order => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${order.product}</td>
                <td>${order.id}</td>
                <td><span class="status ${order.status.toLowerCase().replace(' ', '-')}">${order.status}</span></td>
                <td><button class="view-btn">View</button></td>
            `;
            tbody.appendChild(row);
        });
    }

    // Initialize with sample data
    populateOrdersTable(sampleOrders);

    // View button functionality
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('view-btn')) {
            const row = e.target.closest('tr');
            const orderId = row.querySelector('td:nth-child(2)').textContent;
            alert(`Viewing details for order #${orderId}`);
            // In a real app, you would show a modal or navigate to order details
        }
    });

    // Date picker functionality
    const dateInput = document.querySelector('.date input');
    dateInput.valueAsDate = new Date();
    
    dateInput.addEventListener('change', function() {
        // In a real app, you would fetch data for the selected date
        console.log('Selected date:', this.value);
    });
});