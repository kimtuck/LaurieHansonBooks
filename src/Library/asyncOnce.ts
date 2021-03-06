export default function asyncOnce(promiseFn: Function) {
    let data: any = null;
    let succeeded = false;

    return async function(...args: any) {
        if (!succeeded) {
            data = await promiseFn(...args);
            succeeded = true;
        }

        return data;
    };
}
