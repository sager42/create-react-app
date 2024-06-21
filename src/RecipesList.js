import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledCard = styled(Card)`
  height: 100%;
  background-color: lightblue;
`;
const LabelTypography = styled(Typography)`
  margin-bottom: 16px;
  font-weight: bold;
`;
const IngredientsTypography = styled(Typography)`
  margin-bottom: 16px;
`;

export const RecipesList = ({ recipes }) => {
  return (
    <Grid
      container
      rowSpacing={3}
      columnSpacing={5}
      padding={{ xs: 0, md: 3, lg: 5 }}
    >
      {recipes.map((recipe) => (
        <Grid item xs={12} md={6} lg={4}>
          <StyledCard>
            <CardMedia
              sx={{ height: 140 }}
              image={recipe.recipe.image}
              title="Recipie"
            />
            <CardContent>
              <LabelTypography>
                {recipe.recipe.label}
              </LabelTypography>
              {recipe.recipe.ingredientLines.map((ingredientLine) => (
                <IngredientsTypography variant="body2" component="div">
                  {ingredientLine}
                </IngredientsTypography>
              ))}
            </CardContent>
          </StyledCard>
        </Grid>
      ))}
    </Grid>
  );
};
