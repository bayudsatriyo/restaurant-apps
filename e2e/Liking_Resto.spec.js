Feature('Liking Resto');

Before(({ I }) => {
    I.amOnPage('/');
});

Scenario('test something',  ({ I }) => {
    I.waitForElement('.resto a', 30);
    I.seeElement('.resto a');
    I.click(locate('.resto a').first());
    I.waitForElement('#likeButton', 30);
    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/like');
    I.waitForElement('.resto a', 30);
    I.seeElement('.resto a');
    I.click(locate('.resto a').first());
    I.waitForElement('#likeButton', 30);
    I.seeElement('#likeButton');
    I.click('#likeButton');
});
