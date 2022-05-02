export default function PageFile(props){

    const getPages=() =>{

        const result= [];

        for(let i=0;i<props.total;i++){

            result.push(<a className="active" href="#">i</a>);

        }
        
        return result;
    }
    
    return (
        <div className="topbar-filter">
            <label>Movies per page:</label>
            <div className="pagination2">
                <span>Page {props.page} of {props.total}:</span>

                {Array.apply(0,Array(props.total)).map(value => <a className="active" href="#">i</a>)}

                {getPages()}
               
                <a href="#">2</a>
                <a href="#"><i className="ion-arrow-right-b"></i></a>
            </div>
        </div>);

}