class Load extends React.Component{
    Constructor(type){
        super(type)
        
    }
    render(){
        return(
            <div></div>
        );
    }
}

class set_def extends React.Component{
    render(){
        return(
            <div class="game-window">
                <div class="triangle-bg">
                    <img src="images/bg-triangle.svg" alt="triangle-background"/>
                </div>
                <div id="paper" class="rps-circle paper-color choice-button">
                    <div class="inner-circle">
                    <img src="images/icon-paper.svg" alt="choose-paper"/>
                    </div>
                </div>
                <div id="rock" class="rps-circle rock-color choice-button">
                    <div class="inner-circle">
                    <img src="images/icon-rock.svg" alt="choose-paper"/>
                    </div>
                </div>
                <div id="scissors" class="rps-circle scissors-color choice-button">
                    <div class="inner-circle">
                    <img src="images/icon-scissors.svg" alt="choose-paper"/>
                    </div>
                </div>
            </div>
        );
    }
}