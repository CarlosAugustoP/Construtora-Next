import styled from 'styled-components';
export const Container = styled.div`
    width: 90%;
    display: flex;
    flex-direction: ${props => props.direction || 'row-reverse'};
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    gap:20px;
    
    @media (max-width: 768px) {
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
        padding:10px;
        gap:0px;

    }
`;
 export const ImageContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 400px;

 img {
     object-fit: cover;
     height: 100%;
     width: 100%;
 }

 @media (max-width: 768px) {
     width: 100%; /* Take full width on small screens */
     height: auto; /* Adjust height automatically */
     
     img {
         width: 90%; /* Adjust image width on small screens */
         height: auto;
         padding-top: 20px; /* Adjust image height automatically */
        
     }
 }
`;

export const TextContainer = styled.div`
    width: 50%;
    padding: 20px;

    @media (max-width: 768px) {
         /* Remove padding on small screens */
            padding: 0;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            top:10px;
    }

`;

export const Text = styled.p`
    font-weight: 200;
    font-size: 20px;
    @media (max-width: 768px) {
            position: relative;
            bottom:30px;
            padding-left: 10px;
            padding-right: 10px;
    }
    
    `;