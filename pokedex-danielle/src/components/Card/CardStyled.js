import styled from "styled-components";

export const CardContainer = styled.div`
    background-color: orange;
    padding:1vh;
    margin: 1vh;
    text-align: center;
    margin-left:10vh;
    color: #f2f2f2;
min-width: 30vh;
max-width: 40vh;
align-items: center;

    img{
        min-width: 20vh;
        max-width: 30vh;
    }
`
export const DetailsButton = styled.div`
    font-family:Arial, Helvetica, sans-serif;
    text-align:left;
    text-decoration:underline;
    margin: auto;
    :hover{    
    cursor: pointer;
    opacity: 0.80;
}
`

export const CaptureButton = styled.div`
    font-family:Arial, Helvetica, sans-serif;
    text-align: right;
    min-width: auto;
    min-height:auto;
        :hover{    
            cursor: pointer;
            opacity: 0.80
            }


`