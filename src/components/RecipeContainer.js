import React from 'react';
import Loading from '../components/Loading';
import RecipeFilter from '../components/RecipeFilter';
import RecipeList from '../components/RecipeList';
import { withRecipeConsumer} from '../context';


const RecipeContainer = ({context}) => {
    const {loading, sortedRecipes}= context;
    
    if(loading){
       return <Loading />
    }
    return (
        <>
            <RecipeFilter recipes={sortedRecipes}/>
            <RecipeList recipes={sortedRecipes} />
        </>
    )
}

export default withRecipeConsumer(RecipeContainer);
