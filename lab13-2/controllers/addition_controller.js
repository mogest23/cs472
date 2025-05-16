exports.withParam = async (req, res) => {
    let { num1, num2 } = req.params;

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    res.status(200).json({ result: num1 + num2 });
}

exports.withQuery = async (req, res) => {
    let { num1, num2 } = req.query;

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    res.status(200).json({ result: num1 + num2 });
};

exports.withBody = async (req, res) => {
    let { num1, num2 } = req.body;

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    res.status(200).json({ result: num1 + num2 });
};