import React, { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";

const Alerts = () => {
  const {alerts} = useContext(AlertContext);

  return (
    <div>
    {alerts.length > 0 && 
      alerts.map(alert => (
        <div key={alert.id} className={`alert alert-${alert.type}`}>
          <i className="fas fa-info-circle" /> {alert.msg}
        </div>
      ))}
      </div>
  );
};

export default Alerts;
