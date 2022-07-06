import styled from '@emotion/styled';
import { Grid } from '@mui/material';

export const DivContainer = styled.div`
  display: flex;
    justify-content: center;
  //   flex-direction: column;
  background-color: black;
  
  height: 100%;
`;
// export const GridContainer = styled(Grid)`
//   //  display:flex;
//   //  justify-content:center;
//   //  align-item:center;

//   margin: 0 auto;
//   margin-top: 5%;
// `;
export const Gridbox = styled(Grid)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items:center;
  
  
`;

export const GridData = styled.div`
  display: flex;
  justify-content:center;
  flex-direction:column;
  margin-top:5%;
  
  
`;
export const UserName = styled.span`
  // font-weight: 16px;
  // font-size: 16px;
  // align-self: center;
  margin:20px;
  
`;
export const DataItem=styled.div`
 display:flex;
//  justify-content:space-between;
 margin-top:20px;
  // border:2px solid yellow;
 

`
