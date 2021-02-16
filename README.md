# Predicting Cancer with machine learning
Final Project: Utilize machine learning algorithms to predict cancer


Data from: https://www.kaggle.com/uciml/breast-cancer-wisconsin-data/

Heroku App: https://machinelearningcancer.herokuapp.com

Slideshow link: https://docs.google.com/presentation/d/1w3Rg7RuROG6V_xe4OqEsrX59GLWaYJf7IeDV-KzXiZM/edit?usp=sharing

## Correlation between features

Before preforming any machine learning algorithms, it's important to check that no direct correlations exists between them.

![mean subset corr](/static/images/corr_mean.png)

![se subset corr](/static/images/corr_se.png)

![worst subset corr](/static/images/corr_worst.png)

Due to the high correlation between radius, area, and perimeter and  concavity, concave points, and compactness, only perimeter and compactness will be used going forward.

## Decision Tree and Random Forest

Using scikit-learn's decision tree classifier, a decision tree was created with a score of 0.929
![Decision Tree](/static/images/tree_all.png)

Using scikit-learn's random forest with a n=200, a random forest was created with a score of 0.989.
![Random Forest Importance](/static/images/importance_all.png)

## K Nearest Neighbor

Using sci-kit learn's K nearest neighbor, for both scaled and unscaled data, 7 was determined to be the optimal number of neighbors to use.
THe unscaled version had a test score of 0.924 at 7 neighbors.

![Unscaled Nearest Neighbor](/static/images/knn_unscaled.png)

The scaled version had a test score of 0.953 at 7 neighbors.

![Scaled Nearest Neighbor](/static/images/knn_scaled.png)

## Conclusion

All learning models gave high scoring results and could be used to actively predict if the tumor is beignin or malignant.
Though it's important to keep in mind that the dataset used is rather small and more data is need to confirm if there is overfitting happening.
