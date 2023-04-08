import React from "react";
import Stack from "@mui/material/Stack";

import { makeStyles } from "@material-ui/core/styles";
import { MDBBadge, MDBCard, MDBCardBody } from "mdb-react-ui-kit";

const useStyles = makeStyles(() => ({
  card: {
    width: "100%",
    borderRadius: 16,
    boxShadow: "0 8px 16px 0 #BDC9D7",
    marginBottom: 20
  },
}));


export default function Features() {

  const styles = useStyles();

  return (
    <div className="row gx-lg-5">
      <MDBCard alignment="center" className={styles.card}>
        <MDBCardBody>
          <Stack>
            <div className="flex-shrink-0">
              <MDBBadge light="true" className="p-3 badge-primary rounded-4">
                <i className="fa-solid fa-mobile-screen fa-2xl text-primary fa-fw"></i>
              </MDBBadge>
            </div>
            <div className="flex-grow-1 mt-3">
              <p className="fw-bold mb-1">Multi-Platform</p>
              <p className="text-muted mb-1">
                Use the same codebase for both Android and iOS
              </p>
            </div>
          </Stack>
        </MDBCardBody>
      </MDBCard>

      <MDBCard alignment="center" className={styles.card}>
        <MDBCardBody>
          <Stack>
            <div className="flex-shrink-0">
              <MDBBadge light="true" className="p-3 badge-primary rounded-4">
                <i className="fa-brands fa-rust fa-2xl text-primary fa-fw"></i>
              </MDBBadge>
            </div>
            <div className="flex-grow-1 mt-3">
              <p className="fw-bold mb-1">Rust Driven</p>
              <p className="text-muted mb-1">
                Safe, performant, and extremely proficient
              </p>
            </div>
          </Stack>
        </MDBCardBody>
      </MDBCard>

      <MDBCard alignment="center" className={styles.card}>
        <MDBCardBody>
          <Stack>
            <div className="flex-shrink-0">
              <MDBBadge light="true" className="p-3 badge-primary rounded-4">
                <i className="fa-solid fa-laptop-code fa-2xl text-primary fa-fw"></i>
              </MDBBadge>
            </div>
            <div className="flex-grow-1 mt-3">
              <p className="fw-bold mb-1">Flexible UI</p>
              <p className="text-muted mb-1">
                Utilize the frontend framework of your choice
              </p>
            </div>
          </Stack>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}
