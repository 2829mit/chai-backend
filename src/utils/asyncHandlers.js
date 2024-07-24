// CODES FOR ERROR HANDLING >>>>>>>>>>>>>>>
const asyncHandlers = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
    };
};
export { asyncHandlers };

// _____<<<< THIS METHOD IS A WRAPPER FUNCTION THAT WE USE EVERYWHERE .THIS WAS THE 2ND METHOD. FIRST METHOD IS ABOVE THIS ____>>>>>>>>>>

// const asyncHandler = (fn) => async (req,res,next) =>{
//     try {
//         await fn(req,res,next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success:false,
//             message:err.message
//         })
//     }
// }