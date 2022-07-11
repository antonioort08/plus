import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

export default function data() {
  return {
    columns: [
      { Header: "numero", accessor: "number", align: "left" },
      { Header: "descripcion", accessor: "description", width: "45%", align: "left" },
      { Header: "SUBESTACIÓN ACOMETIDA", accessor: "acometida", align: "center" },
      { Header: "SUBESTACIÓN NORTE", accessor: "norte", align: "center" },
      { Header: "SUBESTACIÓN sur", accessor: "sur", align: "center" },
      { Header: "precio unitario", accessor: "unitario", align: "center" },
      { Header: "total", accessor: "total", align: "center" },
    ],

    rows: [
      {
        number: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            1.1
          </MDTypography>
        ),
        description: (
          <MDBox lineHeight={1} textAlign="left">
            <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
              CABLES DE POTENCIA XLP:
            </MDTypography>
            <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
              a. Inspección, limpieza de los conos de alivio y reapriete de conexiones.
            </MDTypography>
            <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
              b. Medición de la resistencia de aislamiento acorde a la longitud del conductor
            </MDTypography>
            <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
              Cantidad
            </MDTypography>
          </MDBox>
        ),
        acometida: (
          <MDBox lineHeight={1} textAlign="left">
            <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
              $5,400.00
            </MDTypography>
            <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
              4
            </MDTypography>
          </MDBox>
        ),
        norte: (
          <MDBox lineHeight={1} textAlign="left">
            <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
              $1,350.00
            </MDTypography>
            <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
              1
            </MDTypography>
          </MDBox>
        ),
        sur: (
          <MDBox lineHeight={1} textAlign="left">
            <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
              $2,700.00
            </MDTypography>
            <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
              2
            </MDTypography>
          </MDBox>
        ),
        unitario: (
          <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
            $1350.00
          </MDTypography>
        ),
        total: (
          <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
            $9450.00
          </MDTypography>
        ),
      },
      {
        number: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            1.1
          </MDTypography>
        ),
        description: (
          <MDBox lineHeight={1} textAlign="left">
            <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
              INTERRUPTOR EN AIRE:
            </MDTypography>
            <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
              a. Limpieza general.
            </MDTypography>
            <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
              b. Lubricación del mecanismo de operación.
            </MDTypography>
            <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
              c. Pruebas de operación.
            </MDTypography>
            <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
              Cantidad
            </MDTypography>
          </MDBox>
        ),
        acometida: (
          <MDBox lineHeight={1} textAlign="left">
            <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
              $5,400.00
            </MDTypography>
            <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
              4
            </MDTypography>
          </MDBox>
        ),
        norte: (
          <MDBox lineHeight={1} textAlign="left">
            <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
              $1,350.00
            </MDTypography>
            <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
              1
            </MDTypography>
          </MDBox>
        ),
        sur: (
          <MDBox lineHeight={1} textAlign="left">
            <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
              $2,700.00
            </MDTypography>
            <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
              2
            </MDTypography>
          </MDBox>
        ),
        unitario: (
          <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
            $1350.00
          </MDTypography>
        ),
        total: (
          <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
            $9450.00
          </MDTypography>
        ),
      },
    ],
  };
}
