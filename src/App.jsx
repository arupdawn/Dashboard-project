import "./App.css";
import CollapsibleComponent from "./CollapsibleComponent";
import DashBoardTable from "./DashBoardTable";
import { samplejson } from "./Dummy";

function App() {
  const jsonData = samplejson;
  return (
    <div className="main-container">
      <div className="dashboard-container">
        <div className="dashboard-left-section">
          <div className="dashboard-tabs-section">
            <div className="dashboard-tabs">
              <div className="each-tabs">Data</div>
              <div className="each-tabs">Summary</div>
              <div className="each-tabs">Logs</div>
            </div>
            <div className="download-button">Download</div>
          </div>

          <div className="dashboard-table-section">
            <div className="table-header">
              <div className="table-header-info">
                <div className="header-info">
                  <div>PROJECT NAME</div>
                  <label>ETL New Demo 2</label>
                </div>
                <div className="header-info">
                  <div>OUTPUT DATASET NAME</div>
                  <label>ETL N_D2</label>
                </div>
                <div className="header-info">
                  <div>LAST RUN</div>
                  <label>Not Available</label>
                </div>
              </div>

              <div>Rows : {jsonData.row_count}</div>
            </div>

            <div className="main-table-section">
              <DashBoardTable />
            </div>
          </div>
        </div>

        <div className="dashboard-workflow-section">
          <div className="workflow-header-section">
            <label>Workflow</label>
            <div>Icons</div>
          </div>

          <div className="main-worklow">
            <CollapsibleComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
