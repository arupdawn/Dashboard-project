import "./App.css";
import CollapsibleComponent from "./CollapsibleComponent";
import DashBoardTable from "./DashBoardTable";
import { samplejson } from "./Dummy";
import SettingsIcon from "@mui/icons-material/Settings";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SignalCellularAltOutlinedIcon from "@mui/icons-material/SignalCellularAltOutlined";
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";

import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import DirectionsRunOutlinedIcon from "@mui/icons-material/DirectionsRunOutlined";
import PendingActionsOutlinedIcon from "@mui/icons-material/PendingActionsOutlined";

function App() {
  const jsonData = samplejson;
  return (
    <div className="main-container">
      <div className="dashboard-container">
        <div className="dashboard-left-section">
          <div className="dashboard-tabs-section">
            <div className="dashboard-tabs">
              <div
                style={{
                  backgroundColor: "#2C0060",
                  color: "white",
                  fontWeight: "400",
                }}
                className="each-tabs"
              >
                <SettingsOutlinedIcon />
                <label>Data</label>
              </div>
              <div className="each-tabs">
                <SignalCellularAltOutlinedIcon />
                <label>Summary</label>
              </div>
              <div className="each-tabs">
                <TextSnippetOutlinedIcon />
                <label>Logs</label>
              </div>
            </div>
            <div className="download-button">
              <SaveRoundedIcon />
              <label>Download</label>
            </div>
          </div>

          <div className="dashboard-table-section">
            <div className="table-header">
              <div className="table-header-info">
                <div className="header-info">
                  <div>
                    <SettingsIcon sx={{ fontSize: "1.2rem" }} />
                    <label>PROJECT NAME</label>
                  </div>
                  <label>ETL New Demo 2</label>
                </div>
                <div className="header-info">
                  <div>
                    <StorageRoundedIcon sx={{ fontSize: "1.2rem" }} />
                    <label>OUTPUT DATASET NAME</label>
                  </div>
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
            <div className="worflow-icons">
              <CloseOutlinedIcon />
              <FileDownloadOutlinedIcon />
              <SaveOutlinedIcon />
              <DirectionsRunOutlinedIcon />
              <PendingActionsOutlinedIcon />
            </div>
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
