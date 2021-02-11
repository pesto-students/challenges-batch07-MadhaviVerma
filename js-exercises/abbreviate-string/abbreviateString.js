

 function abbreviateString(str) {
    var split_names=str.trim().split(" ");
    if (split_names.length > 1) {
        return (split_names[0] + " " + split_names[1].charAt(0) );
    }
    return split_names[0];


}

export{abbreviateString};

