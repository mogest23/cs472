exports.withParam = async (req, res) => {
    let { num1, num2 } = req.params;

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (num2 === 0) {
        return res.status(400).json({ error: "Cannot divide by zero" });
    }

    res.status(200).json({ result: num1 / num2 });
}

exports.withQuery = async (req, res) => {
    let { num1, num2 } = req.query;

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (num2 === 0) {
        return res.status(400).json({ error: "Cannot divide by zero" });
    }

    res.status(200).json({ result: num1 / num2 });
};

exports.withBody = async (req, res) => {
    let { num1, num2 } = req.body;

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (num2 === 0) {
        return res.status(400).json({ error: "Cannot divide by zero" });
    }

    res.status(200).json({ result: num1 / num2 });
}; 