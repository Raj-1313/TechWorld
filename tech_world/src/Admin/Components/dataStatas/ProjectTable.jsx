
import { Box, Card, CardBody, CardFooter, CardHeader,Container,Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

const tableData = [
  {
    img_url
: "user1",
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    project: "Flexy React",
    status: "pending",
    weeks: "35",
    budget: "95K",
  },
  {
    img_url
: "user2",
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    project: "Lading pro React",
    status: "done",
    weeks: "35",
    budget: "95K",
  },
  {
    img_url
: "user3",
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    project: "Elite React",
    status: "holt",
    weeks: "35",
    budget: "95K",
  },
  {
    img_url
: "user4",
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    project: "Flexy React",
    status: "pending",
    weeks: "35",
    budget: "95K",
  },
  {
    img_url
: "user5",
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    project: "Ample React",
    status: "done",
    weeks: "35",
    budget: "95K",
  },
];

const ProjectTables = () => {
  return (
    <Box scrollBehavior='auto'>
      <Card>
        <CardBody>
          <CardHeader
 tag="h5">Project Listing</CardHeader
>
          <CardFooter
 className="mb-2 text-muted" tag="h6">
            Overview of the projects
          </CardFooter>

          <Table  responsive >
            <Thead>
              <Tr>
                <Th>Team Lead</Th>
                <Th>Project</Th>

                <Th>Status</Th>

                <Th>Budget</Th>
              </Tr>
            </Thead>
            <Tbody>
              {tableData.map((tdata, index) => (
                <Tr key={index} className="border-top">
                  <Td>
                    <div className="d-flex align-items-center p-2">
                      <img
                        src={tdata.img_url
}
                        className="rounded-circle"
                        alt="img_url
"
                        width="45"
                        height="45"
                      />
                      <div className="ms-3">
                        <h6 className="mb-0">{tdata.name}</h6>
                        <span className="text-muted">{tdata.email}</span>
                      </div>
                    </div>
                  </Td>
                  <Td>{tdata.project}</Td>
                  <Td>
                    {tdata.status === "pending" ? (
                      <span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span>
                    ) : tdata.status === "holt" ? (
                      <span className="p-2 bg-warning rounded-circle d-inline-block ms-3"></span>
                    ) : (
                      <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span>
                    )}
                  </Td>

                  <Td>{tdata.budget}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </CardBody>
      </Card>
    </Box>
  );
};

export default ProjectTables;
