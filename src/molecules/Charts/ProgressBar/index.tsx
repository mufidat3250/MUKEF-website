import { useState } from "react";
import { ApexOptions } from "apexcharts"
import ReactApexChart from "react-apexcharts";
const RadialBar =()=>{
    const [series, setseries] = useState([70])
    const option:ApexOptions = {
        chart: {
          height: 250,
          type: 'radialBar',
        },
        colors: ["#20E647"],
        plotOptions: {
          radialBar: {
            hollow: {
              size: '50%',
              background:'transparent',
            } ,
            track: {
              background: 'rgba(0, 0, 0, 0.4)'
            }, 
            dataLabels: {
              name: {
                show: true,
                color:'#010833',
                fontSize:'12.24px',
                fontWeight:'400',
                
              },
              value: {
                fontSize: "18.36px",
                show: true,
                fontWeight:'600'
              }
            }           
          },
          
               
        },
        
        labels: ['Complete'],
      }
      return (
        

        
      <ReactApexChart options={option} series={series} type="radialBar" height={250} />      
      
      );
      }

  

     
    

export default RadialBar