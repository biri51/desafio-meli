import styled from "styled-components";

export const Container = styled.header`
    
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--yellow);
    padding-top: 5px;
    padding-bottom: 5px;

    input {
    position: relative;
    width: 50%;
    padding-top: 5px;
    padding-bottom: 3px;
    padding-left: 3px;
    font-size: 1rem;
    font-weight: lighter;
    font-family: sans-serif;

  
}
.logo {
    justify-content: space-between;
    margin-right: 30px;
    padding: 0px;
    outline: 0px;
   
    
}
.lupaImg{
    height: 22px;
    padding-left: 0px;
    color: lightgray;
}
`

export const Content = styled.div`
    /* margin-top: 1rem; */
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    
       

    li {
        list-style-type: none;
        display: flex;
        padding-bottom: 0rem;
        padding-top: 1rem;
        background-color: var(--background);    
    }

    img.search {
        width: 100px;
        height: 100px;
        margin-right: 15rem;
        
    }

    button {
     
        border: none;
        background: none;
        /* padding-top: 10rem; */
        margin-right: 10rem;
        right: 238px;
        padding-top: 60px;
        padding-bottom: .1rem;
        position: relative;
        font-weight: normal;
        cursor: pointer;
     
    }
    span.price {
        font-weight: bold;
        background-color: none;
        padding-top: 0.3rem;
        margin-left: 6.5rem;
        position: absolute;
        font-size: 1.5rem;
    }
    


    span.city {
        font-weight: lighter;
        position: absolute;
        font-size: 0.8rem;
        padding-left: 50rem;
        padding-top: 1.5rem;
        
    }

    div.click {
        display: flex;
        position: absolute;
        padding-top: 1rem;
        margin-top: 30rem;
        margin-right: 4rem;
        
    }

    img.onSearch {
        position: relative;
       height: 150px;
       width: 150px; 
       margin-left: 400px;
    }
    
    button.comprar {
    position: relative;
    display: block;
    width: 160px;
    min-height: 20px;
    margin-top: 100px;
    padding: 30px;
    border: 1px solid #888;
    /* border-radius: 10px; */
    box-sizing: border-box;
    box-shadow: 0 0 8px 0 rgba(0,0,0,0.25);
    display: block;

    /* border-width: 0 10px; */
    border-radius: 10px;
    background: rgba(0,30,255,.7);
    color: white;
    font-size: 16px;
 /* margin: -60px auto 15px; */
    padding: 15px;
    cursor: pointer;
    margin-left: 500px;
    
    }

    span.titleSearch {

    }

    span.priceSearch {

    }
   

`;

