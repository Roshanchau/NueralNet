// dot product
const dot = (a, b) => a.map((x, i) => a[i] * b[i]).reduce((m, n) => m + n);

// creating the dense layers hidden layer and outer layer.
const myDense=(a_in , W ,b , type)=>{
    const units=W[0].length;
    const a_out=new Array(units).fill(0);
    for(let j=0; j<units; j++){
        const w=W.map(d=> d[j]);
        const z=dot(w, a_in)+b[j];
        // Relu activation function for hidden layer
        if(type=="hidden"){
            a_out[j]=Math.max(0 , z);
        }
        // sigmoid activation function for outer layer
        else if(type=="outer"){
            a_out[j]=1 / (1 + Math.exp(-z));
        }
    }
    return a_out;
}

const mySequential=(x , W1 , b1 ,W2 , b2)=>{
    // hidden layer with 3 nuerons
    a1=myDense(x , W1 , b1 , "hidden");
    // outer layer with 1 neuron
    a2=myDense(a1 , W2 , b2 , "outer");
    return a2;
}

const predict=(X , W1 , b1 , W2 , b2)=>{
    m=X.length;
    p=new Array(m).fill(0);
    for(let i=0; i<m; i++){
        p[i]=mySequential(X[i] , W1 , b1 , W2 , b2)
    }
    return p;
}

// weights and bias
const W1_tmp = ( [[-8.93,  0.29, 12.9 ], [-0.1,  -7.32, 10.81]] )
const b1_tmp = ( [-9.82, -9.28,  0.96] )
const W2_tmp = ( [[-31.18], [-27.59], [-32.56]] )
const b2_tmp = ( [15.41] )

// two inputs
const x_tst=[
    [-0.47 , 0.42],
 [-0.47 , 3.16]
]

const predictions=predict(x_tst , W1_tmp , b1_tmp , W2_tmp , b2_tmp)


const y=new Array(predictions.length).fill(0);

for(let j=0; j<predictions.length; j++){
    if(predictions[j]>=0.5){
        y[j]=1;
    }else{
        y[j]=0;
    }
}

console.log("this if final predictioin" , y);