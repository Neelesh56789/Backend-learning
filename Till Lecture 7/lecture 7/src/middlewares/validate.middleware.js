import {body, validationResult} from 'express-validator';
const validate = async (req, res, next)=>{

    //setup rules
    const rules = [body('name').notEmpty().withMessage('Name is requirred'),
                   body('price').isFloat({gt: 0}).withMessage('Price must be a positive value'),
                   body('imageUrl').custom((value, {req})=>{
                    if(!req.file){
                        throw new Error("Image is requirred")
                    }
                    return true;
                   })
    ]

    //run those rules
    await Promise.all(rules.map((rule)=>rule.run(req)));

    //check if there is any errors after running the rules or not

    const validationErrors = validationResult(req)

        if(!validationErrors.isEmpty())
        {
            res.render('newProduct', {
            errorMessage: validationErrors.array()[0].msg
            })
        }
    next();
}

export default validate;