export const fileCheckTypes = <const>{
    png: 'image/png',
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    webp: 'image/webp',
    svg: 'image/svg+xml',
    mp4: 'video/mp4',
    pdf: 'application/pdf',
    csv: 'text/csv',
    xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
}

interface Props {
    accept: Array<keyof typeof fileCheckTypes>
    limitSize?: number // MB
    limitCount?: number
}

export const useFilesCheck = ({
    accept,
    limitSize = 8,
    limitCount = 1,
}: Props) => {
    const setErrorMessage = (msg: string) => {
        // TODO: notify user
        // eslint-disable-next-line no-alert
        alert(msg)
    }

    const checkFilesLength = (filesLength: number) => {
        return filesLength <= limitCount
    }

    const checkFileType = (file: File) => {
        const name = file.name
        const lastDot = name.lastIndexOf('.')
        const ext = name.substring(
            lastDot + 1,
        ) as unknown as keyof typeof fileCheckTypes
        return accept.includes(ext)
    }

    const checkFileSize = (file: File) => {
        const sizeInMB = file.size / 1000000
        return limitSize >= sizeInMB
    }

    const checkFiles = (files: FileList | null): File[] | false => {
        if (!files) return false
        if (!checkFilesLength(files.length)) {
            setErrorMessage('Please upload only one file')
            return false
        }
        for (let i = 0; i < files.length; i++) {
            const file = files[i]
            if (!checkFileType(file)) {
                setErrorMessage('Please upload correct files')
                return false
            }
            if (!checkFileSize(file)) {
                setErrorMessage(`Please upload files less than ${limitSize} MB`)
                return false
            }
        }
        return Array.from(files)
    }

    return {
        checkFiles,
    }
}
