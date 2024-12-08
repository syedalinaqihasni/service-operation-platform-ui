/* globals Chart:false */

(() => {
    'use strict'
  
    // Graphs
    const ctx = document.getElementById('multiBarChart')
    // eslint-disable-next-line no-unused-vars
    const multiBarChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [
          'Item 1',
          'Item 2',
          'Item 3',
          'Item 4',
          'Item 5',
          'Item 6',
          'Item 7'
        ],
        datasets: [
          {
            label: 'Category A',
            data: Array.from({ length: 7 }, () => Math.floor(Math.random() * 50000)),
            backgroundColor: 'rgba(0, 123, 255, 0.7)',
            borderColor: '#007bff',
            borderWidth: 1
          },
          {
            label: 'Category B',
            data: Array.from({ length: 7 }, () => Math.floor(Math.random() * 50000)),
            backgroundColor: 'rgba(40, 167, 69, 0.7)',
            borderColor: '#28a745',
            borderWidth: 1
          },
          {
            label: 'Category C',
            data: Array.from({ length: 7 }, () => Math.floor(Math.random() * 50000)),
            backgroundColor: 'rgba(255, 193, 7, 0.7)',
            borderColor: '#ffc107',
            borderWidth: 1
          }
        ]
      },
      
      
    options: {
      plugins: {
        legend: {
          display: true,
          position: 'top'
        },
        tooltip: {
          boxPadding: 3
        }
      },
      scales: {
        x: {
          beginAtZero: true,
          ticks: {
            font: {
              size: 14,
              // weight: 'bold',
            },
            color: `#fff`
          }
        },
        y: {
          beginAtZero: true,
          ticks: {
            font: {
              size: 14,
              // weight: 'bold',
            },
            color: '#fff'  
          }
        }
      }
    }
    })
  })()
  